package bike.BikeBackEnd;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class BikeController {
	@Autowired
	BikeService service;
	
	@PostMapping("/new")
	public String newCreate(@RequestBody Bike bk)
	{
		return service.create(bk).getBikeModelName()+ " has create";
	}
	
	@GetMapping("/home")
	public List<Bike> makeList()
	{
		return service.list();
	}
	
	@GetMapping("/getting/{name}")
	public Optional<Bike> makeRead(@PathVariable("name") int name)
	{
		return service.read(name);
	}
	
	@DeleteMapping("/delete/{unique}")
	public String makeRemove(@PathVariable("unique") int unique)
	{
		return service.remove(unique);
	}
	@PutMapping("/update")
	public String makeUpdate(@RequestBody Bike bk)
	{
		return service.create(bk).getBikeModelName()+ " has updated";
	}
	

}
