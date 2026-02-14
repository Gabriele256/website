export default function TestErrorPage() {
    throw new Error("errore di prova simulato");

    return (
        <div>
            <h1>TEST</h1>
        </div>
    );
}
