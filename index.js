const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    // add more records as necessary
  ];
  
  function superbowlWin(record) {
    const win = record.find(record => record.result === "W");
    return win ? win.year : undefined;
  }
  
  console.log(superbowlWin(record)); // This should log the year of the win if there is one, or undefined if there isn't.
  