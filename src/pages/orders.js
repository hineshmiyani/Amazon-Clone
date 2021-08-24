import Header from "../components/Header";

function orders() {
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b pb-1 mb-2 border-yellow-500">
          Your Orders
        </h1>
      </main>
    </div>
  );
}

export default orders;
