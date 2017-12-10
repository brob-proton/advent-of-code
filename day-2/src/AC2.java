import java.io.BufferedReader;
import java.io.FileReader;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class AC2 {
	public static void main(String[] args) throws Exception {
		int checksum = 0;
		BufferedReader br = new BufferedReader(new FileReader(AC2.class.getResource("ac2.txt").getPath()));
		String s;
		Pattern splitter = Pattern.compile("\t");

		while ((s = br.readLine()) != null) {
			List<Integer> ints = splitter.splitAsStream(s).map(Integer::valueOf).collect(Collectors.toList());
			int max = ints.stream().mapToInt(p -> p).max().getAsInt();
			int min = ints.stream().mapToInt(p -> p).min().getAsInt();
			checksum += (max - min);
		}
		System.out.println("checksum: " + checksum);

		br.close();

	}
}
