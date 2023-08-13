const GraphSection = () => {
  return (
    <div className="graph-section">
      <div className="graph-container container text-center">
        <div className="row">
          <div className="img-col col-6 md-12">
            <img
              src="https://www.ceicdata.com/datapage/charts/o_india_retail-price-doac-tomato-assam-guwahati/?type=area&from=2022-03-01&to=2023-02-01&lang=en"
              alt="graph"
            />
          </div>
          <div className="text-col col-6 md-12">
            <h1>
              COMPARE
              <br />
              WITH <br />
              GRAPH
            </h1>
          </div>
        </div>
        <div className="button-col">
          <a className="btn btn-light" href="#" role="button">
            Compare Others
          </a>
        </div>
      </div>
    </div>
  );
};
export default GraphSection;
