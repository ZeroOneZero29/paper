import './css/Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <p className="header_title" id="header_title">
          Morning News
        </p>
        <div className="data-container">
          <p className="date_nubmer" id="date_nubmer">
            25
          </p>
          <p className="data_month" id="data_month">
            Ноябрь
          </p>
        </div>
      </div>
    </div>
  );
}
