import HttpService from "../Http";

class searchCNPJService {
  static searchCNPJ = cpnjNumber =>  HttpService.getCNPJ('hiring/search/company?cnpj=' + cpnjNumber)
}

export default searchCNPJService;
