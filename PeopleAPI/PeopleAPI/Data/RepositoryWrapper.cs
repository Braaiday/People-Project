using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleAPI.Data
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private AppDbContext _appDbContext;
        private IPersonRepository _Person;

        public RepositoryWrapper(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public IPersonRepository Person
        {
            get
            {
                if (_Person == null)
                {
                    _Person = new EFPersonRepository(_appDbContext);
                }

                return _Person;
            }
        }
    }
}
