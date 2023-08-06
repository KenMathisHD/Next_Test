import ledger from "../../../../../data/books/j_ledger";

const handler = (req, res) => {
  console.log("Hello wRodl");
  if (req.method) {
    try {
      const { id } = req.query;
      const item = ledger;
      console.log(item);
      res.status(200).json(item);
    } catch (err) {
      res.status(404).json({ message: `error fetching item details: ${err}` });
    }
  }
};

export default handler;
