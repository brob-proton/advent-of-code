import java.io.BufferedReader;
import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public class Programs {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new FileReader("input.txt"));
		String s;
		Map<String, String> stringMap = new HashMap<>();

		while ((s = br.readLine()) != null) {
			String[] strings = s.split(" -> ");
			String[] children = (strings.length > 1) ? strings[1].split(",") : new String[0];

			if (children.length > 0) {
				for (int i = 0; i < children.length; i++) {
					stringMap.put(children[i].trim(), strings[0].split("[(]")[0].trim());
				}
			}
		}

		br.close();

		Set<String> answer = stringMap.values()
				.stream()
				.filter(key -> !stringMap.keySet().contains(key))
				.collect(Collectors.toSet());
		
		System.out.println(answer);
	}
}