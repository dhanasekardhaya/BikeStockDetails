package bike.BikeBackEnd;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BikeService {
	@Autowired
	
	BikeRespository repo;
	
	public Bike create(Bike bk)
	{
		return repo.save(bk);
	}
	
	public List<Bike> list()
	{
		return (List<Bike>)repo.findAll();
	}
	
	public Optional<Bike> read(int number)
	{
		return repo.findById(number);
	}
	public String remove(int key)
	{
		String del = repo.findById(key).orElse(new Bike()).getBikeModelName()+" has removed";
		repo.deleteById(key);
		return del;
	}

}
