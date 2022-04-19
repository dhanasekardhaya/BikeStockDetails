package bike.BikeBackEnd;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BikeRespository extends CrudRepository<Bike, Integer>
{

}
