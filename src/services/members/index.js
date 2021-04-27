import api from "../api";

class MembersServices {
  static getMembers = companyId => api.get(`hiring/beneficiaries/company/${companyId}`)
  static uploadMembersSpreadsheet = (data, companyId, options) => api.postFile(`hiring/companies/${companyId}/uploadBeneficiaries`, data, options)
  static downloadSpreadsheet = () => api.getDownload('hiring/beneficiaries/donwloadExampleSpreadsheet')
}

export default MembersServices;
