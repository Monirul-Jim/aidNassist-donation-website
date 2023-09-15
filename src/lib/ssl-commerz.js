import { SslCommerzPayment } from "sslcommerz";
const storeId = process.env.SSL_STOREID
const sslPass = process.env.SSL_PASS;
const isLive = false;
export const sslCommerz = new SslCommerzPayment(storeId, sslPass, isLive)