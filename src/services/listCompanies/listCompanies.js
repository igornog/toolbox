import HttpService from '../Http'

class ListCompaniesService {
    static listAllCompanies = () => HttpService.getCompanies(`companies`)
  }

export default ListCompaniesService