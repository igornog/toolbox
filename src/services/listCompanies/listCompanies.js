import HttpService from "../Http";

class ListCompaniesService {
  static listAllCompanies = (cpnjNumber) =>
    HttpService.get(
      `hiring/backoffice/company/listWithOpenContracts?filterString=` +
        cpnjNumber +
        `&limit=1`
    );

  static checkCNPJ = (companyId) =>
    HttpService.get("hiring/backoffice/company/" + companyId);
}

export default ListCompaniesService;
