import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddUserForm from './AddBookForm'

function App() {

    // if (!window.indexedDB) {
    //     console.log(`Your browser doesn't support IndexedDB`);
    //     return;
    // }
    const [db] = useState(null)
    const [Books, setBooks] = useState([])
    const [currentBook, setCurrentBook] = useState({ id: '', title: '', description: '', category: '' })
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setBooks([
            {
                id: 1,
                title: "L'Étranger",
                category: "Roman",
                description: "Un roman d'Albert Camus sur l'absurdité de la vie."
            },
            {
                id: 2,
                title: "À la recherche du temps perdu",
                category: "Roman",
                description: "L'œuvre majeure de Marcel Proust."
            },
            {
                id: 3,
                title: "Madame Bovary",
                category: "Roman",
                description: "Un chef-d'œuvre de Gustave Flaubert sur les désirs inassouvis."
            },
            {
                id: 4, title: "Les Misérables", category: "Roman historique", description: "L'épopée de Victor Hugo sur la justice et la rédemption."
            },
            {
                id: 5, title: "Le Petit Prince", category: "Conte philosophique", description: "Un conte touchant d'Antoine de Saint-Exupéry."
            },
            {
                id: 6, title: "Germinal", category: "Roman social", description: "Un roman d'Émile Zola sur la condition ouvrière."
            },
            {
                id: 7, title: "Voyage au bout de la nuit", category: "Roman", description: "L'œuvre majeure de Louis-Ferdinand Céline."
            },
            {
                id: 8,
                title: "La Peste",
                category: "Roman",
                description: "Un roman d'Albert Camus sur une épidémie à Oran."
            },
            {
                id: 9,
                title: "Les Fleurs du mal",
                category: "Poésie",
                description: "Un recueil de poèmes de Charles Baudelaire."
            },
            {
                id: 10,
                title: "Candide",
                category: "Conte philosophique",
                description: "Un conte satirique de Voltaire."
            },
            {
                id: 11,
                title: "Notre-Dame de Paris",
                category: "Roman historique",
                description: "Un roman de Victor Hugo sur le destin tragique d'Esmeralda."
            },
            {
                id: 12,
                title: "Bel-Ami",
                category: "Roman",
                description: "Un roman de Guy de Maupassant sur l'ascension sociale."
            },
            {
                id: 13,
                title: "Le Comte de Monte-Cristo",
                category: "Roman d'aventure",
                description: "Un roman d'Alexandre Dumas sur la vengeance."
            },
            {
                id: 14,
                title: "La Chute",
                category: "Roman",
                description: "Un roman d'Albert Camus sur la culpabilité et la chute morale."
            },
            {
                id: 15,
                title: "Thérèse Raquin",
                category: "Roman",
                description: "Un roman naturaliste d'Émile Zola."
            },
            {
                id: 16,
                title: "Les Trois Mousquetaires",
                category: "Roman d'aventure",
                description: "Un roman d'Alexandre Dumas sur l'amitié et l'aventure."
            },
            {
                id: 17,
                title: "Du côté de chez Swann",
                category: "Roman",
                description: "Le premier tome de l'œuvre de Marcel Proust."
            },
            {
                id: 18,
                title: "L'Assommoir",
                category: "Roman social",
                description: "Un roman d'Émile Zola sur la vie dans les quartiers populaires de Paris."
            },
            {
                id: 19,
                title: "Nana",
                category: "Roman",
                description: "Un roman d'Émile Zola sur la décadence de la société parisienne."
            },
            {
                id: 20,
                title: "Les Rougon-Macquart",
                category: "Série de romans",
                description: "Une série de romans d'Émile Zola dépeignant la société française sous le Second Empire."
            }
        ])


        const dbName = 'Library';
        const request = indexedDB.open(dbName);
        request.onerror = (event) => {
            console.error(`Database error: ${event.target.errorCode}`);
        };

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            db.createObjectStore('Books', {
                keyPath: "id",
                autoIncrement: true
            });
        };

        request.onsuccess = (event) => {
            // setDb(event.target.result);
            fetchBooks(event.target.result);
            const db = event.target.result;
            // fetchFilms(event.target.result);
            console.log('Base de données "Library" créée avec succès.');

            insertBook(db, {Books});
            // console.log(Books);
        };

        request.onerror = function (event) {
            console.log(event.target.errorCode);
        };

        function insertBook(db, Book) {

            const dbName = 'Library';
            const request = indexedDB.open(dbName);

            request.onsuccess = function (event) {
                const db = event.target.result;
            };

            const transaction = db.transaction(["Books"], "readwrite");
            const Books = transaction.objectStore("Books");
            let query = Books.put(Book);

            query.onsuccess = function (event) {
                console.log(event);
            };

            query.onerror = function (event) {
                console.log(event.target.errorCode);
            }

            transaction.oncomplete = function () {
                db.close();
            };
        }

    }, []);


    function fetchBooks(db) {
        const transaction = db.transaction(["Books"], "readonly");
        const objectStore = transaction.objectStore("Books");
        const request = objectStore.getAll();

        request.onsuccess = function () {
            setBooks(request.result);
        };
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setCurrentBook(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setEditMode(false)
        if (editMode) {
            updateBook(currentBook);
        } else {
            addBook(currentBook);
        }
        setCurrentBook({ id: '', title: '', description: '', category: '' });
    }

    function addBook(Book) {
        const transaction = db.transaction(["Books"], "readwrite");
        const objectStore = transaction.objectStore("Books");
        objectStore.add(Book);
        fetchBooks(db);
        console.log("book added suucessfully!")
    }

    function updateBook(Book) {
        const transaction = db.transaction(["Books"], "readwrite");
        const objectStore = transaction.objectStore("Books");
        objectStore.put(Book);
        fetchBooks(db);
        console.log("book updated suucessfully!")

    }

    function deleteBook(id) {
        const transaction = db.transaction("Books", "readwrite");
        const objectStore = transaction.objectStore("Books");
        objectStore.delete(id);
        fetchBooks(db);
        console.log("book deleted suucessfully!")
    }

    return (
        <div className="container mt-5">

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={currentBook.title} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={currentBook.description} onChange={handleInputChange} required></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Année</label>
                    <input type="text" className="form-control" name="category" value={currentBook.category} onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary">{editMode ? 'Mettre à jour' : 'Ajouter'}</button>
            </form>

            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Categories</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Books.map(Book => (
                        <tr >
                            <td>{Book.id}</td>
                            <td>{Book.title}</td>
                            <td>{Book.description}</td>
                            <td>{Book.category}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => {
                                    setEditMode(true)
                                    setCurrentBook(Book);
                                }}>Éditer</button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteBook(Book.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className='add'> Ajouter un utilisateur via ce formulaire</h1>
            {/* <AddUserForm addBook={addBook} /> */}
        </div>
    );
}

export default App;