pragma solidity ^0.4.17;

 contract HouseContract{
    address Creator;
    string LessorName="chang";
    string HirerName="han";
    string BrokerName="jang";
    string Address="shincgon";
    string ContractDate="2017-13-45";
    string ExpireDate="2018-2-31";
    uint16 Payment=6500;
    uint16 DownPayment=30;
    uint16 leaseFee=15;

    function HouseContract() public {
        Creator = msg.sender;
    }

    function getCreator() constant public returns(address) {
        return Creator;
    }

    function insertContract_name(
                //address _userAddress,
                string _LessorName,
                string _HirerName,
                string _BrokerName
                )public {
        LessorName = _LessorName;
        HirerName = _HirerName;
        BrokerName = _BrokerName;

    }
    function insertContract_date (
                string _Address,
                string _ContractDate,
                string _ExpireDate
                )public {
          Address = _Address;
          ContractDate = _ContractDate;
          ExpireDate = _ExpireDate;

      }
      function insertContract_etc (
                uint16 _Payment,
                uint16 _DownPayment,
                uint16 _leaseFee
                )public {
          Payment = _Payment;
          DownPayment = _DownPayment;
          leaseFee = _leaseFee;
                }

    function getContract_name() public constant
    returns(string, string, string){
            return (LessorName, HirerName, BrokerName);
            }
    function getContract_date() public constant
    returns(string, string, string){
            return ( Address,ContractDate, ExpireDate);
            }

    function getContract_etc()public  constant
    returns(uint16, uint16, uint16){
            return (Payment, DownPayment, leaseFee);
            }
}
