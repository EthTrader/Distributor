pragma solidity ^0.4.18;

contract Distributor {
    function sendTo(address[] recipients) public payable {
        uint each = msg.value/(recipients.length);
        for (uint i = 0; i < recipients.length; i++) {
          require(recipients[i].send(each));
        }
    }
}
