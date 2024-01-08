import { useState } from "react";

export default function App() {
  return <Calculator />;
}

function Calculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const tipAmount = (bill * (tip / 100)) / people;
  const total = (bill + bill * (tip / 100)) / people;

  function handlePeople(e) {
    setPeople(Number(e.target.value));
  }
  function onReset() {
    setBill(0);
    setTip(0);
    setPeople(0);
  }

  function handleSetBill(e) {
    setBill(Number(e.target.value));
  }

  function handleTip(e) {
    setTip(Number(e.target.value));
  }
  return (
    <div className="calculator">
      <div className="bill-tip">
        <Bill setBill={setBill} bill={bill} handleSetBill={handleSetBill} />

        <Tip tip={tip} setTip={setTip} handleTip={handleTip} />

        <People people={people} handlePeople={handlePeople} />
      </div>
      <div className="calc">
        <TipAmount tipAmount={tipAmount}>
          <div>
            <label>Tip Amount</label>
            <p>/ person</p>
          </div>
          <input
            type="text"
            diasbled
            value={tipAmount && people ? `$${tipAmount.toFixed(2)}` : "$0.00"}
          />
        </TipAmount>

        <TipAmount total={total}>
          <div>
            <label>Total</label>
            <p>/ person</p>
          </div>
          <input
            type="text"
            disabled
            value={tip && people ? `$${total.toFixed(2)}` : "$0.00"}
          />
        </TipAmount>
        <Reset handleReset={onReset} />
      </div>
    </div>
  );
}

function Bill({ bill, handleSetBill, billPrice }) {
  return (
    <div>
      <label>Bill</label> <br />
      <input type="text" value={bill} onChange={handleSetBill} />
    </div>
  );
}

function Tip({ handleTip }) {
  return (
    <div className="tip">
      <label>Select Tip %</label>
      <div className="btns">
        <button value="5" onClick={handleTip}>
          5%
        </button>
        <button value="10" onClick={handleTip}>
          10%
        </button>
        <button value="15" onClick={handleTip}>
          15%
        </button>
        <button value="25" onClick={handleTip}>
          25%
        </button>
        <button value="50" onClick={handleTip}>
          50%
        </button>
        <input type="text" placeholder="Custom" onChange={handleTip} />
      </div>
    </div>
  );
}

function People({ people, handlePeople }) {
  return (
    <div className="people">
      <label>Number of People</label>
      <input type="text" value={people} onChange={handlePeople} />
    </div>
  );
}

function TipAmount({ children }) {
  return <div className="tip-amount">{children}</div>;
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>RESET</button>;
}
