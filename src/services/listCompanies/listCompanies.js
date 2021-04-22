import HttpService from "../Http";

class ListCompaniesService {
  static listAllCompanies = (cpnjNumber) =>
    HttpService.get(
      `hiring/backoffice/company/listWithOpenDocuments?filterString=` +
        cpnjNumber +
        `&limit=100`
    );

  static checkCNPJ = (cpnjNumber) =>
    HttpService.get("hiring/search/company?cnpj=" + cpnjNumber);
}

export default ListCompaniesService;
