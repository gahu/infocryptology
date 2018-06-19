pragma solidity ^0.4.0;

// contract Contract{
//     struct Person{
//         string LessorName;
//         string HirerName;
//         string BrokerName;
//     }
//     struct description{
//         string Address;
//         uint Payment;
//         uint DownPayment;
//         uint leaseFee;
//     }
//     struct
// }
contract AAA{
    //enum Contract_Type {Jun,Wall,Mae}

	event NewBBB(uint id,string Contractor_name,string Contractee_name,string Contract_NaeYoung,string Contract_Juso,string Contract_Type,uint32 Contract_money);

    // function _generateRandomAddress_Contractor(string Contractor_name) private  returns(uint)
    // {
    //     uint rand_Contractor = uint(keccak256(Contractor_name));
    // }
    // function _generateRandomAddress_Juso(string Contract_Juso) private returns(uint)
    // {
    //     uint rand_Juso = uint (keccak256(Contract_Juso));
    // }
    // mapping(uint => address ) ContractorToOwner;
    // mapping(address=>uint) OwnerHomeCount;

    struct BBB {
    string Contractor_name;
    string Contractee_name;
    string Contract_NaeYoung;
    string Contract_Juso;
    string Contract_Type;
    uint32 Contract_money;
    }

    BBB[] public bbb;
    function _createBBB (
                string _Contractor_name,
                string _Contractee_name,
                string _Contract_NaeYoung,
                string _Contract_Juso,
                string _Contract_Type,
                uint32 _Contract_money)
                public
                {
                    bbb.push(BBB(_Contractor_name,_Contractee_name,_Contract_NaeYoung,_Contract_Juso,_Contract_Type,_Contract_money));
                    uint id = bbb.push(BBB(_Contractor_name,_Contractee_name,_Contract_NaeYoung,_Contract_Juso,_Contract_Type,_Contract_money))-1;
                 //   ContractorToOwner[id]=msg.sender;
                    //OwnerHomeCount[msg.sender]++;
                    NewBBB(id,_Contractor_name,_Contractee_name,_Contract_NaeYoung,_Contract_Juso,_Contract_Type,_Contract_money);
                }
    function get_Contract()public view returns(string _Contractor_name,
                string _Contractee_name,
                string _Contract_NaeYoung,
                string _Contract_Juso,
                string _Contract_Type,
                uint32 _Contract_money)
                {
                    return( _Contractor_name,
                 _Contractee_name,
                 _Contract_NaeYoung,
                 _Contract_Juso,
                 _Contract_Type,
                 _Contract_money);
                }
// 	function get_Contractor_name   ()public view returns( string _Contractor_name) {return _Contractor_name;}
// 	function get_Contractee_name   ()public view returns(string _Contractee_name) {return _Contractee_name;}
// 	function get_Contract_NaeYoung ()public view returns(string _Contract_NaeYoung) {return _Contract_NaeYoung;}
// 	function get_Contract_Juso     ()public view returns(string _Contract_Juso) {return _Contract_Juso;}
// 	function get_Contract_Type     ()public view returns (string _Contract_Type){return _Contract_Type;}
//     function get_Contract_money    ()public view returns (uint32 _Contract_money){return _Contract_money;}

}
