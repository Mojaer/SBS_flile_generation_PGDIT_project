

const Variables = () => {

    const S_title = ["DEP.DESC", "CODE", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13", "S14", "S15", "TOTAL"]
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"]
    const Sector_title = [
        "Presidency,PM office,Ministries,Judiciary",
        "Autonomous & semi autonomous Bodies",
        "Deposit Money Banks",
        "Local Authorities",
        "Public Non Financial Corporations",
        "Non Bank Depository Corporations- Public",
        "Other Financial Intermediaries-Public",
        "Insurance Companies & Pension Funds-Public",
        "Non Bank Depository Corporations -Private",
        "Other financial Intermediaries- Private",
        "Insurance Companies and Pension Funds- Private",
        "Financial Auxiliaries -Private",
        "Other Non Financial CORP",
        "Non Profit Institutions Serving Household",
        "Household Residents"
    ]

    const Instrument_title = [
        "Current Deposit",
        "CASH CREDIT DEPOSIT(CR.BAL)",
        "DEPOSITS WITHDRAWABLE ON SIGHT",
        "SAVINGS DEPOSIT",
        "FIXED DEPOSITS",
        "SHORT TERM DEPOSITS",
        "PENSION SCHEME DEPOSITS",
        "MARGIN DEPOSITS_F.C",
        "MARGIN DEPOSITS-TAKA",
        "Special Purpose Deposit",
        "N.C.D. & Promissory Notes",
        "Restricted (Blocked Deposit)",
        "Accrued Interest"
    ]

    const Sector_Codes = ['s12110s', 's12120s', 's12500s', 's12210s', 's12220s', 's12230s', 's12240s', 's12250s', 's12330s', 's12340s', 's12350s', 's12360s', 's12370s', 's12380s', 's12390s']

    return { Sector_title, Instrument_title, Sector_Codes, S_title, alphabets }
}

export default Variables