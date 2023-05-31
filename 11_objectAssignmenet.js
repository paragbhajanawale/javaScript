let sbiBank={
    bankName:"State Bank Of India",
    location:"Khandala",
    accountNo: 875633241138,
    ifscCode: "SBI0004108",
    interestRate: '6.00%',
    
    showDetails: function() {
    console.log(`bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifscCode: ${this.ifscCode}, interestRate: ${this.interestRate}`);
    }
};
    let axisBank  = { 
        bankName:"Axis Bank",
        location:"Pune",
        accountNo: 446657892427,
        ifscCode: "UTIB0000135",
        interestRate: '6.6%',
    
        showDetails: function() {
        console.log(
            `bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifscCode: ${this.ifscCode}, interestRate: ${this.interestRate}`
        );
    }
    };
    console.log(`=======================SBI Bank===========================`);
    sbiBank.showDetails();
    axisBank.showDetails();

    let bankOfindia = {
        bankName:"bankOfIndia",
        location:"sangola",
        accountNumber:6800328966,
        ifscCode:"BKID0007001",
        interestRate:"8.5%",

        showDetails:function(){
            console.log(`bankName:${bankOfindia},location ${this.location},accountnumber ${this.accountNumber},IFSCCODE ${this.ifscCode},rateofINTEREST ${this.interestRate}`);
        }
    }
    bankOfindia.showDetails();
    
    let hdfc={
        bankName:"HdfcBank",
        accountNumber:1234567890,
        ifscCode:'hdfc007899',
        city:'pune',
        accountType:'savingAccount',

        showDetails:function(){
        console.log(`bank name ${bankOfindia},Account Number ${this.accountNumber},IFSC code ${this.ifscCode},City ${this.city},Account Type is ${this.accountNumber}`);
        }
    }
    hdfc.showDetails();
