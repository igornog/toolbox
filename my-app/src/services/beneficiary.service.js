import HttpService from './Http'

class BeneficiaryService {
  static uploadSpreadsheet = (data, companyId, options) => HttpService.postFile(`hiring/companies/${companyId}/uploadBeneficiaries`, data, options)
}

export default BeneficiaryService