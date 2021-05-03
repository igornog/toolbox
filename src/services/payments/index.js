import api from "../api";

class PaymentsServices {
  static activatePlans = () => api.put(`hiring/payment/activatePlans`)
}

export default PaymentsServices;
