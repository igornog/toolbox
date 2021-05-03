import api from "../api";

class CompaniesServices {
  static listAllCompanies = (cpnjNumber) =>
    api.get(
      `hiring/backoffice/company/listWithOpenDocuments?filterString=` +
        cpnjNumber +
        `&limit=10`
    );

  static checkCNPJ = (companyId) => 
    api.get("hiring/backoffice/company/" + companyId);

  static updateContract = (cnpjNumber) =>
  api.put("https://n9im7t03ha.execute-api.us-east-1.amazonaws.com/production/fhir/payment/sendContractCoverage", { 'data-raw': { companies: [cnpjNumber] } } );

  // static deleteCompanies = (cpnjNumber) =>
  //   api.delete(
  //     `hiring/backoffice/company/listWithOpenDocuments?filterString=` +
  //       cpnjNumber +
  //       `&limit=1`
  //   );
}

export default CompaniesServices;
