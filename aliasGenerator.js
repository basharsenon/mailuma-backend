exports.generateAlias = function () {
    const base = "aliofficerecruitmentm185lhr";
    const dots = base.split('').join('.');
    const random = Math.random().toString(36).substring(2, 8);
    return `${dots}+${random}@gmail.com`;
};
