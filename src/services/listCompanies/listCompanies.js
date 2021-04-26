import HttpService from "../Http";

class ListCompaniesService {
  static listAllCompanies = (cpnjNumber) =>
    HttpService.get(
      `hiring/backoffice/company/listWithOpenDocuments?filterString=` +
        cpnjNumber +
        `&limit=1`
    );

  static checkCNPJ = (companyId) =>
    HttpService.get("hiring/backoffice/company/" + companyId);
}

export default ListCompaniesService;
