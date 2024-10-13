import "./incomeWidget.scss";

const IncomeWidjet = ({ icone, iconColor, bgColor, prize, totalIncome }) => {
  return (
    <>
      <section id="Income_widget">
        <div
          className="rounded income_width"
          style={{ backgroundColor: bgColor }}
        >
          <div className="text-white d-flex align-items-center mx-4">
            <div style={{ color: iconColor }}>{icone}</div>

            <div className="mx-3">
              <div className="text-white">{prize}</div>
              <div className="text-white">{totalIncome}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncomeWidjet;
