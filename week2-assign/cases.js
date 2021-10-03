
let total=1;


const factorial = number =>{
    total=1;
    for(let i=number;i>=2;i--){
        total*=i;
    }
    return total;
}

const permutation = (n,r)=>{
    const perm1=factorial(n);
    const perm2=factorial(n-r);

    return perm1/perm2;
}

const combination = (n,r)=>{
    const perm1=factorial(n);
    const perm2=factorial(n-r);
    const perm3=factorial(r);

    return perm1/(perm2*perm3);
}

const multiPermutation = (n,r)=> n**r;

const multiCombination = (n,r)=>{
    const perm1=factorial(n+r-1);
    const perm2=factorial(n-1);
    const perm3=factorial(r);

    return perm1/(perm2*perm3);
}

module.exports = {
    permutation,
    combination,
    multiCombination,
    multiPermutation,
};
