import ScreenContainer from "./components/ScreenContainer";

function App() {
  return (
    <ScreenContainer isVisible={true}>
      <div className="min-h-screen flex items-center justify-center px-8 py-16">
        <section className="solid-panel romantic-text p-16 text-center max-w-3xl w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Happy Birthday MenteE
          </h1>
          <p className="text-2xl md:text-3xl text-[var(--text-secondary)] leading-relaxed">
            Wishing you a day filled with love, smiles, and beautiful memories.
          </p>
        </section>
      </div>
    </ScreenContainer>
  );
}

export default App;
