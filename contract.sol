pragma solidity ^0.4.0;

 contract Contract{
 mapping(address => Person) public Contracts;
 address[] contractIndex;
     struct Person{
         string LessorName;
         string HirerName;
         string BrokerName;
         string Address;
         string ContractDate;
         string ExpireDate;
         uint Payment;
         uint DownPayment;
         uint leaseFee;
     }
    function insertContract(
                address userAddress,
                string LessorName,
                string HirerName,
                string BrokerName,
                string Address,
                string ContractDate,
                string ExpireDate,
                uint Payment,
                uint DownPayment,
                uint leaseFee
       )public returns(bool success){
        Contracts[userAddress].LessorName = LessorName;
        Contracts[userAddress].HirerName = HirerName;
        Contracts[userAddress].BrokerName = BrokerName;
        Contracts[userAddress].Address = Address;
        Contracts[userAddress].ContractDate = ContractDate;
        Contracts[userAddress].ExpireDate = ExpireDate;
        Contracts[userAddress].Payment = Payment;
        Contracts[userAddress].DownPayment = DownPayment;
        Contracts[userAddress].leaseFee = leaseFee;
        contractIndex.push(userAddress);
        return true;
    }
    function getContract(address userAddress)
    public
    constant
    returns(string LessorName,
            string HirerName,
            string BrokerName,
            string Address,
            string ContractDate,
            string ExpireDate,
            uint Payment,
            uint DownPayment,
            uint leaseFee)
            {
            return(Contracts[userAddress].LessorName,
            Contracts[userAddress].HirerName,
            Contracts[userAddress].BrokerName,
            Contracts[userAddress].Address,
            Contracts[userAddress].ContractDate,
            Contracts[userAddress].ExpireDate,
            Contracts[userAddress].Payment,
            Contracts[userAddress].DownPayment,
            Contracts[userAddress].leaseFee);
            }
      }

}
