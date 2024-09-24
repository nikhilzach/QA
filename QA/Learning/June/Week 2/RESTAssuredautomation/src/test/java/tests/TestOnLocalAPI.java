package tests;

import org.json.simple.JSONObject;
import org.testng.annotations.*;

import io.restassured.http.ContentType;

import static io.restassured.RestAssured.*;
public class TestOnLocalAPI {
@Test
	public void get() {
		baseURI="http://localhost:3000";
		given().get("/users").
		then().statusCode(200);
	}
@Test
	public void post() {

	baseURI="http://localhost:3000";
	JSONObject request = new JSONObject();
	request.put("firstname", "Edison");
	request.put("lastname","Alva");
	request.put("subjectid", "2");
	given().
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
		body(request.toJSONString()).
	when().
		post("/users").
	then().
		statusCode(201);
	
	
}

@Test
public void put() {

baseURI="http://localhost:3000";
JSONObject request = new JSONObject();
request.put("firstname", "Edison");
request.put("lastname","Alvaaaaaaaaaaa");
request.put("subjectid", "2");
given().
	contentType(ContentType.JSON).
	accept(ContentType.JSON).
	body(request.toJSONString()).
when().
	put("/users/4").
then().
	statusCode(200);


}
	}
