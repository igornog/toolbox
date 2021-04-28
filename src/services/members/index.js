import api from "../api";

class MembersServices {
  static getMembers = companyId => api.get(`hiring/beneficiaries/company/${companyId}`)
  static uploadMembersSpreadsheet = (data, companyId, options) => api.postFile(`hiring/backoffice/companies/${companyId}/uploadBeneficiaries`, data, options)
  static downloadSpreadsheet = () => api.getDownload('hiring/backoffice/companies/uploadBeneficiaries/example')
}

export default MembersServices;
