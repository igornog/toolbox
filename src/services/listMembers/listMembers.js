import HttpService from "../Http";

class ListMembersService {
  static getMembers = companyId => HttpService.get(`hiring/beneficiaries/company/${companyId}`)
}

export default ListMembersService;
