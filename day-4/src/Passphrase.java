import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Passphrase {
	public static int countValid(String filename) throws Exception {
		BufferedReader br = new BufferedReader(new FileReader(new File(filename)));
		int validCount = 0;
		String line;
		
		while ((line = br.readLine()) != null) {
			boolean isValid = true;
			List<String> phraseList = new ArrayList<>();
			
			for (String s : Arrays.asList(line.split(" "))) {
				if (phraseList.contains(s)) {
					isValid = false;
				} else {
					phraseList.add(s);
				}
			}
			
			if (isValid) 
				validCount++;
		}
		
		br.close();
		return validCount;
	}
	
	public static void main(String[] args) throws Exception {
		System.out.println("Valid passphrase? " + countValid("phrases.txt"));
	}
}
