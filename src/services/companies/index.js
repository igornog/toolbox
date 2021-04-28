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

  // static deleteCompanies = (cpnjNumber) =>
  //   api.delete(
  //     `hiring/backoffice/company/listWithOpenDocuments?filterString=` +
  //       cpnjNumber +
  //       `&limit=1`
  //   );
}

export default CompaniesServices;
