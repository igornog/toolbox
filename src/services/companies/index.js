import HttpService from "../Http";

class CompaniesServices {
  static listAllCompanies = (cpnjNumber) =>
    HttpService.get(
      `hiring/backoffice/company/listWithClosedContracts?filterString=` +
        cpnjNumber +
        `&limit=1`
    );

  static checkCNPJ = (companyId) =>
    HttpService.get("hiring/backoffice/company/" + companyId);
}

export default CompaniesServices;