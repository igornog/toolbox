import HttpService from "../Http";

class MembersServices {
  static getMembers = companyId => HttpService.get(`hiring/beneficiaries/company/${companyId}`)
  static uploadMembersSpreadsheet = (data, companyId, options) => HttpService.postFile(`hiring/companies/${companyId}/uploadBeneficiaries`, data, options)
}

export default MembersServices;
