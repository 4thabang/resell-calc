// Form attributes
const error = document.getElementById("error");
const success = document.getElementById("success");
const errMess = "This field is required 🥺";
const succMess = "Calculated Savings 🎉";

// Hide when not used
error.style.display = "none";
success.style.display = "none";

// Fees attributes
const other = document.getElementById("otherfees");
const fordabl = document.getElementById("fordablfees");
const savings = document.getElementById("savedfees");

// Placeholder
other.innerHTML = "--";
fordabl.innerHTML = "--";
savings.innerHTML = "--";

// Array of selection values to change text
const aryContent = new Array();

aryContent["0.125"] = "STOCKX FEES";
aryContent["0.124"] = "GOAT FEES";
aryContent["0.15"] = "KLEKT FEES";
aryContent["0.1290"] = "EBAY FEES";
aryContent["0.129"] = "DEPOP FEES";

// text value change on selection using array as object for values
const updateContent = (obj) => {
  const othersel = document.getElementById("otherselect");
  othersel.innerHTML = aryContent[obj[obj.selectedIndex].value];
}

document.getElementById("formselect").onchange = () => {
  updateContent(this);
};

// Fee calculation function
const feeCalculation = () => {
  // Grab values from HTML
  const soldAmmt = document.getElementById("form").value;
  const resellFee = document.getElementById("formselect").value;

  // Input validation
  if (soldAmmt === "" || resellFee === 0) {
    error.innerHTML = errMess;
    error.style.display = "inline";
    return;
  } else if (soldAmmt !== "" || resellFee !== 0) {
    success.innerHTML = succMess;
    success.style.display = "inline";
  }

  // platform fee calculation
  let val = resellFee * soldAmmt;

  switch (resellFee) {
    case "0.125":
      val += 8.5;
      val = Math.round(val * 100) / 100;
      val = val.toFixed(2);
      break;
    case "0.124":
      val += 10;
      val = Math.round(val * 100) / 100;
      val = val.toFixed(2);
    case "0.1290":
      val += 0.65;
      val = Math.round(val * 100) / 100;
      val = val.toFixed(2);
      break;
    case "0.129":
      val += 0.3;
      val = Math.round(val * 100) / 100;
      val = val.toFixed(2);
      break;
    case "0.15":
      val = Math.round(val * 100) / 100;
      val = val.toFixed(2);
      break;
    default:
      return;
  }

  // fordabl fee calculation
  let ours = 0.1 * soldAmmt;
  ours = Math.round(ours * 100) / 100;
  ours = ours.toFixed(2);

  // saved fees calculation
  let saved = val - ours;
  saved = Math.round(saved * 100) / 100;
  saved = saved.toFixed(2);

  // displaying fee calculations
  other.innerHTML = `£${val}`;
  fordabl.innerHTML = `£${ours}`;
  savings.innerHTML = `£${saved}`;
}

document.getElementById("button").onclick = () => {
  feeCalculation();
};
