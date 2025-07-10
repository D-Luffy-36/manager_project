export default function ProgressBar({ progress = 0 }) {
    return (
        <>
            <div className="bg-gray-200 h-2 rounded mt-4">
                <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

        </>
    );
}