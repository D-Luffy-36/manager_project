export default function AddButton({ tittle, onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                className="w-full bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded mb-6"
            >
                {tittle}
            </button>
        </>
    );
}