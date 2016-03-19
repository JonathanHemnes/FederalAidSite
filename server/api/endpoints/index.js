exports.register = function (server, options, next) {

    server.route({
        method: 'POST',
        path: '/getFilteredPrograms',
        handler: function (request, reply) {
            const FederalAidPrograms = request.server.plugins['hapi-mongo-models'].Programs;
            const person = request.payload;
            const percentageOfFPL = calculateFPL(person.annualIncome, person.numberOfFamilyMembers);
            const ageOfYoungestChild = getYoungestChild(person.children);
            const filter = {

            };
            FederalAidPrograms.find(filter, (err, result)=> {
                console.log(result);
                return reply({result});
            });
        }
    });
    const calculateFPL = (annualIncome, numberOfFamilyMembers) => {
        const individualIncome = 11880;
        const increment = 4140;
        let fpl = individualIncome + (increment * (numberOfFamilyMembers - 1));
        return annualIncome / fpl;
    };
    const getYoungestChild = (children) => {
        //TODO: need to handle no children
        let youngest = children[0];
        children.map((child) => {
            if (child < youngest) {
                youngest = child;
            }
        });
        return youngest;
    };

    next();
};


exports.register.attributes = {
    name: 'api'
};
