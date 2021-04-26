import HttpService from "../Http";

class ListMembersService {
  static getMembers = companyId => HttpService.get(`hiring/backoffice/company/getBeneficiaries/${companyId}`)
}

export default ListMembersService;
