pragma solidity ^0.4.24;

 contract HouseContract{
    address Creator;

    struct Content{
        string LessorName;
        string HirerName;
        string BrokerName;
        string Address;
        string ContractDate;
        string ExpireDate;
        string payment;
    }

    uint256 ContractNumber = 1;
    
    mapping(uint256 => Content) Contracts;

    function addContract(string _lessor, string _hirer,  string _broker, string _address, 
                        string _ContractDate, string _ExpireDate, string _payment) 
                            public {
                                Contracts[ContractNumber].LessorName = _lessor;
                                Contracts[ContractNumber].HirerName = _hirer;
                                Contracts[ContractNumber].BrokerName = _broker;
                                Contracts[ContractNumber].Address = _address;
                                Contracts[ContractNumber].ContractDate = _ContractDate;
                                Contracts[ContractNumber].ExpireDate = _ExpireDate;
                                Contracts[ContractNumber].payment = _payment;
                                ContractNumber++;
    }

    function getContracts(uint256 _ContractNumber) public view 
    returns(string, string, string, string, string, string, string){
        return(
        Contracts[_ContractNumber].LessorName,
        Contracts[_ContractNumber].HirerName,
        Contracts[_ContractNumber].BrokerName,
        Contracts[_ContractNumber].Address,
        Contracts[_ContractNumber].ContractDate,
        Contracts[_ContractNumber].ExpireDate,
        Contracts[_ContractNumber].payment);
    }
    
    function getContractNumber() public view returns (uint){
        return ContractNumber;
    }
}
