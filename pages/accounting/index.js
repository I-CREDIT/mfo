import Head from "next/head";
import BalanceSheetDocument from "../../components/document_1/accounting/balanceSheet";
import CashFlowStatementDocument from "../../components/document_1/accounting/cashFlowStatement";
import ChangeReportDocument from "../../components/document_1/accounting/changeReport";
import ProfitAndLossStatementDocument from "../../components/document_1/accounting/profitAndLossStatement";


const Accounting = () => {

  return (
    <section className="accounting" style={{padding: '150px 0 0' }}>
      <Head>
        <title>Отчетность</title>
      </Head>
      <div className="container">
        <h1>
          Отчетность
        </h1>
        <div>
          <ChangeReportDocument/>
          <BalanceSheetDocument/>
          <CashFlowStatementDocument/>
          <ProfitAndLossStatementDocument/>
        </div>
      </div>
    </section>
  )
}

export default Accounting;