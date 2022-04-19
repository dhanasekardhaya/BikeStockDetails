package bike.BikeBackEnd;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//Database table creation using entity
@Entity

public class Bike {
	//Decalre the table fields 
	//Table id created in primary key using @id and automated id creation using @generatedvalue
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bikeId;
	private String bikeModelName;
	private String bikeVariant;
	private String bikeEngine;
	private int bikeAverageMilage;
	private int bikePrice;
	private int bikeQuantity;
	private String[] bikeColor;
	public Bike() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Bike(String bikeModelName, String bikeVariant, String bikeEngine, int bikeAverageMilage, int bikePrice,
			int bikeQuantity, String[] bikeColor) {
		super();
		this.bikeModelName = bikeModelName;
		this.bikeVariant = bikeVariant;
		this.bikeEngine = bikeEngine;
		this.bikeAverageMilage = bikeAverageMilage;
		this.bikePrice = bikePrice;
		this.bikeQuantity = bikeQuantity;
		this.bikeColor = bikeColor;
	}
	@Override
	public String toString() {
		return "Bike [bikeId=" + bikeId + ", bikeModelName=" + bikeModelName + ", bikeVariant=" + bikeVariant
				+ ", bikeEngine=" + bikeEngine + ", bikeAverageMilage=" + bikeAverageMilage + ", bikePrice=" + bikePrice
				+ ", bikeQuantity=" + bikeQuantity + ", bikeColor=" + Arrays.toString(bikeColor) + "]";
	}
	public int getBikeId() {
		return bikeId;
	}
	public void setBikeId(int bikeId) {
		this.bikeId = bikeId;
	}
	public String getBikeModelName() {
		return bikeModelName;
	}
	public void setBikeModelName(String bikeModelName) {
		this.bikeModelName = bikeModelName;
	}
	public String getBikeVariant() {
		return bikeVariant;
	}
	public void setBikeVariant(String bikeVariant) {
		this.bikeVariant = bikeVariant;
	}
	public String getBikeEngine() {
		return bikeEngine;
	}
	public void setBikeEngine(String bikeEngine) {
		this.bikeEngine = bikeEngine;
	}
	public int getBikeAverageMilage() {
		return bikeAverageMilage;
	}
	public void setBikeAverageMilage(int bikeAverageMilage) {
		this.bikeAverageMilage = bikeAverageMilage;
	}
	public int getBikePrice() {
		return bikePrice;
	}
	public void setBikePrice(int bikePrice) {
		this.bikePrice = bikePrice;
	}
	public int getBikeQuantity() {
		return bikeQuantity;
	}
	public void setBikeQuantity(int bikeQuantity) {
		this.bikeQuantity = bikeQuantity;
	}
	public String[] getBikeColor() {
		return bikeColor;
	}
	public void setBikeColor(String[] bikeColor) {
		this.bikeColor = bikeColor;
	}

}
