async function check(req, res) {
    try {
      const a = await someOtherFunction();
      const b = await somethingElseFunction();
      res.send("result")
    } catch (error) {
      res.send(error.stack);
    }
  }