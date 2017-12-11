import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

public class Memory2 {
	private List<Integer> memory = new ArrayList<>(Arrays.asList(4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5));
	private Map<List<Integer>, Integer> history = new HashMap<>();
	private int runs = 0;

	private int nextCandidate() {
		return IntStream.range(0, memory.size()).reduce((a, b) -> {
			int valA = memory.get(a), valB = memory.get(b);
			return (valA > valB) ? a : ((valA == valB) ? ((a < b) ? a : b) : b);
		}).getAsInt();
	}

	private void reallocate(int candidate) {
		int blocks = memory.get(candidate);
		memory.set(candidate, 0);
		int receiver = (candidate + 1) % memory.size();
		
		while (blocks > 0) {
			memory.set(receiver, memory.get(receiver) + 1);
			blocks--;
			receiver = (receiver + 1) % memory.size();
		}
	}

	public void runAllocator() {
		while (!history.containsKey(memory)) {
			history.put(new ArrayList<>(memory), runs);
			reallocate(nextCandidate());
			runs++;
		}
		
		System.out.println(runs - history.get(memory));
	}

	public static void main(String[] args) {
		new Memory2().runAllocator();
	}
}
