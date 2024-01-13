const baseURL = 'http://localhost:8080'

const tests = '/tests'

const urls = {
    tests,
    byIdTest: (id:string) => `${tests}/${id}`,
    byGrade: (grade:string) => `${tests}/grade/${grade}`
}

export {baseURL, urls}
