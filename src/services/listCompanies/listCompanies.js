import HttpService from '../Http'

class ListCompaniesService {
    static listAllCompanies = () => HttpService.getCompanies(`company/listWithOpenContracts`)
  }

export default ListCompaniesService